import HeadingUnderline from './HeadingUnderline'

type Props = {
  children: string
}

function SectionHeading({ children }: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-center pb-20">
      <p className="text-2xl	font-bold">{children}</p>
      <HeadingUnderline />
    </div>
  )
}

export default SectionHeading
