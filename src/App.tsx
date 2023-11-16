import {About, Hero, Navbar, Worlds} from "./components"

function App() {
    return (
        <main className={"bg-primary-black min-h-screen"}>
            <div className={"container mx-auto p-4"}/>
            <Navbar/>
            <Hero/>
            <About/>
            <Worlds/>
        </main>
    )
}

export default App