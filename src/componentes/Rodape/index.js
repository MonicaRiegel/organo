import './rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <div>
                <ul>
                    <li>
                        <a href="https://linkedin.com/in/monica-riegel"><img className='imagem' src='/imagens/Linkedin.png' alt='logo rede social' /></a>
                    </li>
                    <li>
                        <a href="https://github.com/MonicaRiegel"><img className='imagem' src='/imagens/git.png' alt='logo rede social' /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/monicariegel/"><img src='/imagens/ig.png' alt='logo rede social' /></a>
                    </li>
                </ul>
            </div>
            <div>
                <img src="/imagens/logo.png" alt='logo organo' />
            </div>
            <div>
                <p>Desenvolvido por Mônica Riegel</p>
            </div>
        </footer>
    )
}

export default Rodape