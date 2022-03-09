import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
} from 'next'
import type { AppProps } from 'next/app'

declare module 'next' {
  type NextLayoutComponentType<P = unknown> = NextComponentType<
    NextPageContext,
    P
  > & {
    layout?: NextFunctionComponent
  }
}

declare module 'next/app' {
  type AppLayoutProps<P = unknown> = AppProps & {
    Component: NextLayoutComponentType
  }
}