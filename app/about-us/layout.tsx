export const metadata = {
  title: 'About US!',
}

export default function AboutUSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
        $copy; Next JS is great!
    </div>
  )
}
 