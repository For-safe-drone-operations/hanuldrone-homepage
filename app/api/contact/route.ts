import { type NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message } = body

    // 입력 검증
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '필수 필드가 누락되었습니다.' },
        { status: 400 },
      )
    }

    // 이메일 주소 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 주소를 입력해 주세요.' },
        { status: 400 },
      )
    }

    // 이메일 내용 구성
    const emailContent = `
      <h2>새로운 문의가 접수되었습니다</h2>
      
      <h3>문의자 정보</h3>
      <ul>
        <li><strong>이름:</strong> ${name}</li>
        <li><strong>이메일:</strong> ${email}</li>
        ${company ? `<li><strong>회사명:</strong> ${company}</li>` : ''}
        ${phone ? `<li><strong>연락처:</strong> ${phone}</li>` : ''}
      </ul>
      
      <h3>문의 내용</h3>
      <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">
        ${message}
      </p>
      
      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        이 메일은 한울드론 홈페이지 문의 폼을 통해 자동으로 발송되었습니다.
      </p>
    `

    // Resend를 통해 이메일 전송
    const { data, error } = await resend.emails.send({
      from: 'notify@hanuldrone.com', // Resend에서 인증된 도메인 사용
      // to: ['hanuldrone3@hanuldrone.com'], // 실제 수신 이메일
      to: ['hanuldrone3@hanuldrone.com', 'kyc4421194@gmail.com'], // 실제 수신 이메일
      subject: `[한울드론 문의] ${name}님의 문의`,
      html: emailContent,
      replyTo: email, // 문의자 이메일로 답장 가능
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: '이메일 전송 중 오류가 발생했습니다.' },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        message: '문의가 성공적으로 전송되었습니다.',
        emailId: data?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 },
    )
  }
}
