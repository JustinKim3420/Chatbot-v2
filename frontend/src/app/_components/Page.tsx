import {ReactElement} from 'react'

const Page = ({children}: {children: ReactElement}): ReactElement =>{

    return <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
    </main>
}

export default Page