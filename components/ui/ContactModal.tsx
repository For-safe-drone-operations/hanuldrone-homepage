'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { siteConfig } from '../../siteConfig'
import Text from '@/components/ui/Text'

// Zod 스키마 정의
const contactFormSchema = z.object({
  name: z.string().min(1, siteConfig.sections.contact.form.fields.name.errorMessage),
  company: z.string().optional(),
  email: z.string().email(siteConfig.sections.contact.form.fields.email.errorMessage),
  phone: z.string().optional(),
  message: z.string().min(
    siteConfig.sections.contact.form.fields.message.minLength || 10,
    siteConfig.sections.contact.form.fields.message.errorMessage
  ),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactModalProps {
  children: React.ReactNode
}

const ContactModal = ({ children }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => {
          setOpen(false)
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[85vw] max-w-[380px] sm:max-w-[500px] max-h-[85vh] overflow-y-auto bg-white/95 backdrop-blur-md mx-6 my-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle><Text>{siteConfig.sections.contact.modal.title}</Text></DialogTitle>
            <DialogDescription>
              <Text>{siteConfig.sections.contact.modal.description}</Text>
            </DialogDescription>
          </DialogHeader>

          {submitStatus === 'success' ? (
            <div className="text-center py-6 md:py-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                <Text>{siteConfig.sections.contact.form.messages.success.title}</Text>
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                <Text>{siteConfig.sections.contact.form.messages.success.description}</Text>
              </p>
            </div>
          ) : (
            <div className="grid gap-3 md:gap-4 py-3 md:py-4">
              {/* 이름 */}
              <div className="grid gap-1.5 md:gap-2">
                <Label htmlFor="name" className="text-sm md:text-base">
                  <Text>{siteConfig.sections.contact.form.fields.name.label}</Text>
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder={siteConfig.sections.contact.form.fields.name.placeholder}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs md:text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* 회사명 */}
              <div className="grid gap-1.5 md:gap-2">
                <Label htmlFor="company" className="text-sm md:text-base">
                  <Text>{siteConfig.sections.contact.form.fields.company.label}</Text>
                </Label>
                <Input
                  id="company"
                  {...register('company')}
                  placeholder={siteConfig.sections.contact.form.fields.company.placeholder}
                />
              </div>

              {/* 이메일 */}
              <div className="grid gap-1.5 md:gap-2">
                <Label htmlFor="email" className="text-sm md:text-base">
                  <Text>{siteConfig.sections.contact.form.fields.email.label}</Text>
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder={siteConfig.sections.contact.form.fields.email.placeholder}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs md:text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* 연락처 */}
              <div className="grid gap-1.5 md:gap-2">
                <Label htmlFor="phone" className="text-sm md:text-base">
                  <Text>{siteConfig.sections.contact.form.fields.phone.label}</Text>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  placeholder={siteConfig.sections.contact.form.fields.phone.placeholder}
                />
              </div>


              {/* 문의 내용 */}
              <div className="grid gap-1.5 md:gap-2">
                <Label htmlFor="message" className="text-sm md:text-base">
                  <Text>{siteConfig.sections.contact.form.fields.message.label}</Text>
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder={siteConfig.sections.contact.form.fields.message.placeholder}
                  rows={3}
                  className="resize-none text-sm md:text-base"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs md:text-sm">{errors.message.message}</p>
                )}
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-2 md:p-3">
                  <p className="text-red-800 text-xs md:text-sm">
                    <Text>{siteConfig.sections.contact.form.messages.error.description}</Text>
                  </p>
                </div>
              )}
            </div>
          )}

          <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0">
            <DialogClose asChild>
              <Button variant="outline" disabled={isSubmitting} className="text-sm md:text-base px-4 py-2">
                <Text>{siteConfig.sections.contact.form.buttons.cancel}</Text>
              </Button>
            </DialogClose>
            <Button 
              type="submit" 
              disabled={isSubmitting || submitStatus === 'success'}
              className="text-sm md:text-base px-4 py-2"
            >
              <Text>
                {isSubmitting 
                  ? siteConfig.sections.contact.form.buttons.submitting
                  : siteConfig.sections.contact.form.buttons.submit
                }
              </Text>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ContactModal