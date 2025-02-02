import type { FC } from 'react'

import { Anchor } from './PopoverAnchor'
import { Arrow } from './PopoverArrow'
import { CloseButton } from './PopoverCloseButton'
import { Content } from './PopoverContent'
import { Header } from './PopoverHeader'
import { Portal } from './PopoverPortal'
import { Root, type RootProps } from './PopoverRoot'
import { Trigger } from './PopoverTrigger'

Anchor.displayName = 'Popover.Anchor'
Arrow.displayName = 'Popover.Arrow'
CloseButton.displayName = 'Popover.CloseButton'
Content.displayName = 'Popover.Content'
Header.displayName = 'Popover.Header'
Portal.displayName = 'Popover.Portal'
Trigger.displayName = 'Popover.Trigger'

export const Popover: FC<RootProps> & {
  Anchor: typeof Anchor
  Arrow: typeof Arrow
  CloseButton: typeof CloseButton
  Content: typeof Content
  Header: typeof Header
  Portal: typeof Portal
  Trigger: typeof Trigger
} = Object.assign(Root, {
  Anchor,
  Arrow,
  CloseButton,
  Content,
  Header,
  Portal,
  Trigger,
})
