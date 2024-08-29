import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import logo from '../../assets/logo.png'
import photo from '../../assets/userPhoto.png'
import { FaUser, FaFileAlt, FaComments, FaChartLine, FaBook, FaChartBar, FaSignOutAlt, FaHome } from "react-icons/fa";

import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { BlockUI } from 'primereact/blockui';
import { Skeleton } from 'primereact/skeleton';
import { MeterGroup } from 'primereact/metergroup';
import { Chart } from 'primereact/chart';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../../services/ProductService';
import { Fieldset } from 'primereact/fieldset';


function DashSec() {

    // Usuário vindo quando se Loga !
    const user = JSON.parse(localStorage.getItem('@LOGIN'))

    const { type } = useParams()

    const sair = () => {
        console.log('saiu')
        window.location.href = '/'
    }

    const [activeScreen, setActiveScreen] = useState('evolucao');

    useEffect(() => {
        if (type === "Professor") {
            setActiveScreen("inicio");
        }
    }, [type]);

    // Lógica usando switch/case  ( 1/2 )
    const mostrarTela = (screen) => {
        setActiveScreen(screen);
    };


    // Daqui para baixo são as lógicas da lib PrimeReact
    const [blocked, setBlocked] = useState(true);
    const buttonText = blocked ? 'Vizualizar' : 'Enviar';

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const data = {
            labels: ['Essays', 'Activities', 'Notes', 'Designing', 'Coding', 'IRA', 'Performance'],
            datasets: [
                {
                    label: 'My First dataset',
                    borderColor: documentStyle.getPropertyValue('--teal-500'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--teal-500'),
                    pointBorderColor: documentStyle.getPropertyValue('--teal-500'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--teal-500'),
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    borderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: textColorSecondary
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    const [chartData2, setChartData2] = useState({});
    const [chartOptions2, setChartOptions2] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First year',
                    backgroundColor: documentStyle.getPropertyValue('--teal-500'),
                    borderColor: documentStyle.getPropertyValue('--teal-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Second year',
                    backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
        setChartData2(data);
        setChartOptions2(options);
    }, []);



    const [products, setProducts] = useState([]);

    const onOpen = () => {
        ProductService.getProductsSmall().then(data => setProducts(data));
    }

    const values = [
        { label: 'Entregas', color: 'rgb(255, 159, 64)', value: 16 },
        { label: 'Mensagens', color: 'rgb(75, 192, 192)', value: 8 },
        { label: 'Media', color: 'rgb(54, 162, 235)', value: 24 },
        { label: 'Atividades', color: 'rgb(153, 102, 255)', value: 10 }
    ];


    const [chartData3, setChartData3] = useState({});
    const [chartOptions3, setChartOptions3] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Entregas', 'Mensagens', 'Media', 'Atividades'],
            datasets: [
                {
                    label: 'Relatório',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                    ],
                    borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData3(data);
        setChartOptions3(options);
    }, []);

    // Lógica usando switch/case  ( 2/2 )
    const renderContent = () => {
        switch (activeScreen) {
            case 'perfil':
                return <div>
                    <h2>● Meu Perfil</h2>
                    <img src={photo} alt="" className="phontoIcon" />
                    <article className="">
                        <Button type="button" label="Emails">
                            <Badge value="8"></Badge>
                        </Button>
                        <Button type="button" label="Messages" icon="pi pi-users" severity="secondary">
                            <Badge value="8" severity="danger"></Badge>
                        </Button>
                    </article>
                    <p>Informações sobre perfil - </p>
                    <ul className="">
                        <li>
                            <p>Nome:</p>
                            <h4>{user.name}</h4>
                        </li>
                        <li>
                            <p>Contato:</p>
                            <h4>{user.contact}</h4>
                        </li>
                        <li>
                            <p>E-mail:</p>
                            <h4>{user.email}</h4>
                        </li>
                        <li>
                            <p>Bio:</p>
                            <h4>{user.bio}</h4>
                        </li>
                        <li>
                            <p>Senha:</p>
                            <h4>*******</h4>
                        </li>
                    </ul>
                </div>;

            case 'minhas-redacoes':
                return <div >
                    <h2>● Minhas Redações</h2>

                    <div className="card ">
                        <Accordion activeIndex={0} className="boxS">
                            <AccordionTab header="Redação / Algoritmo 01/08" className="boxS">
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </AccordionTab>
                            <AccordionTab header="Redação / Sistemas 14/07" className="boxS">
                                <p className="m-0">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    Consectetur, adipisci velit, sed quia non numquam eius modi.
                                </p>
                            </AccordionTab>
                            <AccordionTab header="Redação / Linguagem 20/06" className="boxS">
                                <p className="m-0">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                    mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                                </p>
                            </AccordionTab>
                        </Accordion>
                    </div>

                    <div className="card">
                        <Fieldset legend="Realizar Redação" toggleable collapsed={true} className="boxS">
                            <textarea className="textWhrite" name="" id="" placeholder="Escreva aqui..."></textarea>
                        </Fieldset>
                    </div>

                    <div className="card">
                        <BlockUI blocked={blocked} template={<i className="pi pi-lock" style={{ fontSize: '3rem' }}></i>}>
                            <p className="m-0 boxS">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum.
                            </p>
                        </BlockUI>
                        <div className="mt-3 flex flex-column align-items-center boxS">
                            <h3>Aguarde a análise</h3>
                            <Button className="btnToggle" label={buttonText} onClick={() => setBlocked((oldState) => !oldState)}></Button>
                        </div>
                    </div>

                </div>;
            case 'feedbacks':
                return <div>
                    <h2>● Feedbacks</h2>
                    <h4>Você ainda não possui nenhum feedback</h4>

                    <div className="card">
                        <div className="border-round border-1 surface-border p-4 boxS">
                            <ul className="m-0 p-0 list-none">
                                <li className="mb-3">
                                    <div className="flex">
                                        <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                                        <div style={{ flex: '1' }}>
                                            <Skeleton width="100%" className="mb-2"></Skeleton>
                                            <Skeleton width="75%"></Skeleton>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="flex">
                                        <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                                        <div style={{ flex: '1' }}>
                                            <Skeleton width="100%" className="mb-2"></Skeleton>
                                            <Skeleton width="75%"></Skeleton>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>;
            case 'evolucao':
                return <div>
                    <h2>Bem-vindo, Aluno ({user.name})!</h2>
                    <p>Gráficos e estatísticas sobre sua evolução</p>

                    <section className="secContent">
                        <Chart type="radar" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
                        <Chart type="bar" data={chartData2} options={chartOptions2} />
                    </section>

                </div>;

            case 'temas':
                return <div>
                    <h2>● Temas</h2>
                    <p>Temas Propostos pelo Professor</p>
                    <Inplace onOpen={onOpen}>
                        <InplaceDisplay>
                            Abrir temas
                        </InplaceDisplay>
                        <InplaceContent >
                            <DataTable value={products} >
                                <Column field="code" header="ID"></Column>
                                <Column field="name" header="Professor"></Column>
                                <Column field="category" header="Temas"></Column>
                                <Column field="quantity" header="Prazo"></Column>
                            </DataTable>
                        </InplaceContent>
                    </Inplace>
                </div>;

            case 'relatorios':
                return <div>
                    <h2>● Relatórios</h2>
                    <p>Relatório de desempenho</p>


                    <MeterGroup values={values} labelPosition="start" labelOrientation="vertical" />

                    <Chart type="bar" data={chartData3} options={chartOptions3} />

                </div>;

            // /////////////////////////////////////////////////
            // Professor
            case 'inicio':
                return <div>
                    <h2>Seja bem-vindo, Prof.{user.name}</h2>
                    <p>Ferramentas disponíveis:</p>

                    <div>
                        <h3>● Comentários nas Redações</h3>
                        <form>
                            <div className="lineTop">
                                <div >
                                    <label className="text label" htmlFor="name">ID ou RA do Aluno:</label>
                                    <input required className="input" type="text" id="name" placeholder="ID ou RA" />
                                </div>
                                <div >
                                    <label className="text label" htmlFor="redacao">ID da Redação:</label>
                                    <input required className="input" type="text" id="redacao" placeholder="Ex: 015684A@%#" />
                                </div>
                            </div>

                            <label className="labelMg" htmlFor="comentario">Comentário:</label>
                            <textarea className="input" type="text" id="comentario" placeholder="Seu comentário ou obs..." />

                            <button type="submit">Enviar</button>
                        </form>
                    </div>

                    <div>
                        <h3>● Propor Temas</h3>

                        <form action="">
                            <label className="text label" htmlFor="tema">Novo Tema:</label>
                            <textarea className="textMg" type="text" id="tema" placeholder="Descreva seu Tema..." />

                            <button type="submit">Enviar</button>
                        </form>
                    </div>

                </div>;

            case 'comentários':
                return <div>
                    <h3>● Comentários nas Redações</h3>
                    <form>
                        <div className="lineTop">
                            <div >
                                <label className="text label" htmlFor="name">ID ou RA do Aluno:</label>
                                <input className="input" type="text" id="name" placeholder="ID ou RA" />
                            </div>
                            <div >
                                <label className="text label" htmlFor="redacao">ID da Redação:</label>
                                <input className="input" type="text" id="redacao" placeholder="Ex: 015684A@%#" />
                            </div>
                        </div>

                        <label className="text label" htmlFor="comentario">Comentário:</label>
                        <textarea className="input" type="text" id="comentario" placeholder="Seu comentário ou obs..." />

                        <button type="submit">Enviar</button>
                    </form>
                </div>;

            case 'propor-temas':
                return <div>
                    <h3>● Propor Temas</h3>

                    <form action="">
                        <label className="text label" htmlFor="tema">Novo Tema:</label>
                        <textarea className="textMg" type="text" id="tema" placeholder="Descreva seu Tema..." />

                        <button type="submit">Enviar</button>
                    </form>
                </div>;


            default:
                return <div><h2>Bem-vindo</h2><p>Selecione uma opção no menu.</p></div>;
        }
    };



    return (
        <>

            <main className="containerDash">

                <nav className="sidebar">

                    {type == "Aluno" ? (

                        <ul>
                            <li><a href="#" onClick={() => mostrarTela('perfil')}>
                                <FaUser /> <span>Perfil</span></a></li>
                            <li><a href="#" onClick={() => mostrarTela('minhas-redacoes')}>
                                <FaFileAlt /> <span>Redações</span></a></li>
                            <li><a href="#" onClick={() => mostrarTela('feedbacks')}>
                                <FaComments /> <span>Feedbacks</span></a></li>
                            <li><a href="#" onClick={() => mostrarTela('evolucao')}>
                                <FaChartLine /> <span>Evolução</span></a></li>
                            <li><a href="#" onClick={() => mostrarTela('temas')}>
                                <FaBook /> <span>Temas</span></a></li>
                            <li><a href="#" onClick={() => mostrarTela('relatorios')}>
                                <FaChartBar /> <span>Relatórios</span></a></li>
                            <li><a href="#" onClick={() => sair()}>
                                <FaSignOutAlt /> <span>Sair</span></a></li>
                        </ul>

                    ) : (<>
                        <ul>
                            <li><a href="#" onClick={() => mostrarTela('inicio')}>
                                <FaHome /> <span>Início</span></a></li>
                            <li><a href="#" onClick={() => mostrarTela('comentários')}>
                                <FaComments /> <span>Comentários</span></a></li>
                            <li><a href="#" onClick={() => mostrarTela('propor-temas')}>
                                <FaChartBar /> <span>Propor Temas</span></a></li>
                            <li><a href="#" onClick={() => sair()}>
                                <FaSignOutAlt /> <span>Sair</span></a></li>
                        </ul>

                    </>)}

                    <img src={logo} alt='Logo' />

                </nav>

                <aside className="content">
                    {renderContent()}
                </aside>

            </main>



        </>
    )
}
export default DashSec