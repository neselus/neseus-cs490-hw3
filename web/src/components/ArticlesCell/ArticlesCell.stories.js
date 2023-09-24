import { Success } from './ArticlesCell'
import { standard } from './ArticlesCell.mock'

export const success = () => {
  return Success ? <Success {...standard()} /> : null
}

export default { title: 'Cells/ArticlesCell' }
