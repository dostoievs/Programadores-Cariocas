import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import Ana from '../assets/AnaCarolinaSilvaDosSantos.jpeg'
import Antonio from '../assets/AntônioAugustoMartinsDeOliveira.jpg'
import David from '../assets/DavidLopesGomes.png'
import Igor from '../assets/IgorDeSousaMorais.jpg'
import Luan from '../assets/Luan.jpg'
import {FaGithubSquare} from "react-icons/fa";


function Autores() {
    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: '#00BFFF', color:'white'}}>
                <Card.Img variant="top" src={Ana} width='100px' height='250px'/>
                <Card.Body>
                    <Card.Title>Ana Carolina Silva Dos Santos</Card.Title>
                    <Card.Text></Card.Text>
                    <div>
                        <Link to='https://www.linkedin.com/in/ana-carolina-silva-dos-santos/' className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </Link>
                        <Link to='https://github.com/dostoievs' className="btn btn-light">
                            <FaGithubSquare/>
                        </Link>
                    </div>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: '#00BFFF', color:'white'}}>
                <Card.Img variant="top" src={Antonio} width='100px' height='250px'/>
                <Card.Body>
                    <Card.Title>Antônio Augusto Martins de Oliveira </Card.Title>
                    <Card.Text></Card.Text>
                    <div>
                        <Link to='https://www.linkedin.com/mwlite/in/antonio-augusto-martins' className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </Link>
                        <Link to='https://github.com/AugustOliveir' className="btn btn-light">
                            <FaGithubSquare/>
                        </Link>
                    </div>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: '#00BFFF', color:'white' }}>
                <Card.Img variant="top" src={David} width='100px' height='250px'/>
                <Card.Body>
                    <Card.Title>David Lopes Gomes</Card.Title>
                    <Card.Text></Card.Text>
                    
                    <div>
                        <Link to='https://www.linkedin.com/in/igor-sousa-4a6b8120a' className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </Link>
                        <Link to='https://github.com/davidlgomes' className="btn btn-light">
                            <FaGithubSquare/>
                        </Link>
                    </div>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: '#00BFFF', color:'white' }}>
                <Card.Img variant="top" src={Igor} width='100px' height='250px'/>
                <Card.Body>
                    <Card.Title>Igor De Sousa Morais</Card.Title>
                    <Card.Text></Card.Text>
                    
                    <div>
                        <Link to='https://www.linkedin.com/in/igor-sousa-4a6b8120a' className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </Link>
                        <Link to='https://github.com/igorzpqd' className="btn btn-light">
                            <FaGithubSquare/>
                        </Link>
                    </div>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: '#00BFFF', color:'white' }}>
                <Card.Img variant="top" src={Luan} width='100px' height='250px'/>
                <Card.Body>
                    <Card.Title>Luan Silva</Card.Title>
                    <Card.Text></Card.Text>
                    
                    <div>
                        <Link to='https://www.linkedin.com/in/luan-pereira-14a8556a/' className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </Link>
                        <Link to='https://github.com/luansilva92' className="btn btn-light">
                            <FaGithubSquare/>
                        </Link>
                    </div>
                </Card.Body>
            </Card>

           
        </div>
    )
}
export default Autores