import React from 'react'

interface TextProps {
  children: React.ReactNode
  className?: string
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * siteConfig의 텍스트를 자동으로 줄바꿈 및 볼드 처리하는 컴포넌트
 * \n을 <br />로 자동 변환
 * **텍스트**를 <strong>텍스트</strong>로 자동 변환
 */
const Text: React.FC<TextProps> = ({ children, className = '', as: Component = 'span' }) => {
  if (!children) return null

  // children이 string이 아닌 경우 그대로 반환
  if (typeof children !== 'string') {
    return <Component className={className}>{children}</Component>
  }

  const lines = children.split('\n')

  // **텍스트**를 <strong>텍스트</strong>로 변환하는 함수
  const processBoldText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    
    return parts.map((part, partIndex) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2) // ** 제거
        return <strong key={partIndex}>{boldText}</strong>
      }
      return part
    })
  }

  return (
    <Component className={className}>
      {lines.map((line, index) => (
        <React.Fragment key={`${line}-${index}`}>
          {processBoldText(line)}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </Component>
  )
}

export default Text