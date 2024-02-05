import Image from 'next/image'
import PageWrapper from './_components/Page'
import FriendList from './_components/FriendList'
import ChatBox from './_components/ChatBox'

export default function Home() {
  return (
    <PageWrapper>
      <FriendList/>
      <ChatBox />
    </PageWrapper>
  )
}
