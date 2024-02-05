import {ReactElement} from 'react'

const PageWrapper= ({children}: {children?: ReactElement | ReactElement[]}): ReactElement =>{

    return <main className="flex justify-center h-screen min-h-screen min-w-screen p-8 bg-gray-900">
        <section className= "flex flex-row bg-white h-full w-full max-w-7xl">
            {children}
        </section>
    </main>
}

export default PageWrapper