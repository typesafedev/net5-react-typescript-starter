import { FC } from 'react'
import { Container } from 'reactstrap'
import { NavMenu } from './NavMenu'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => (
  <div>
    <NavMenu />
    <Container>{children}</Container>
  </div>
)
