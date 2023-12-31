// This file was generated by RedwoodJS
import * as Cell from './EditPostCell'
import type { CellProps } from '@redwoodjs/web'
import type { FindPostById, FindPostByIdVariables } from 'types/graphql'

type SuccessType = typeof Cell.Success

export * from './EditPostCell'

type CellInputs = CellProps<SuccessType, FindPostById, typeof Cell, FindPostByIdVariables>

export default function (props: CellInputs): ReturnType<SuccessType>
