import { useTypewriter } from 'react-simple-typewriter'
export const TypeEffect = () => {
    const [text, count] = useTypewriter({
        words: ["Fullstack Developer", "Frontend Developer", "Backend Developer"],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 1000
    })
    return (
        <h2 className="text-xl font-semibold uppercase">I'M A <span>{text}</span></h2>
    )
}
