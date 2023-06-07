import { Container } from '@mui/material'
import './Main.scss'
import LinePath from 'components/LInePath/LinePath'
import LatestPosts from 'components/LatestPosts/LatestPosts'

type Props = {}
const Main = (props: Props) => {
  return (
    <main className='main'>
      <LinePath/>
      <div className='main-block'>
        <Container maxWidth="md">
            <LatestPosts/>

        </Container>
    </div>
    </main>
  )
}
export default Main