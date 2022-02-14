import DestinationPage from '../Components/DestinationPage';
import { Link } from "react-router-dom";


function Courchevel() {
    return (
        <div>
            <div className="row">
                <div className="col-sm-12 my-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item nav-link">
                                <Link className="subsequenceColour" to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item nav-link">
                                <Link className="subsequenceColour" to="/winterdestination">Winter Destination</Link>
                            </li>
                            <li className="breadcrumb-item active nav-link" aria-current="page">
                                Courchevel
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <DestinationPage
                title='Courchevel'
                text='Courchevel is a French Alps ski resort. It is a part of Les Trois Vallées, the largest linked ski areas in the world. Courchevel also refers to the towns of Courchevel 1300 (Le Praz), Courchevel 1550, Courchevel 1650 (Moriond), and Courchevel 1850, which are named for their altitudes in metres. On 1 January 2017, Saint-Bon-Tarentaise (1100) merged into the new commune Courchevel. The resort centre of Courchevel is at 1,747 metres (5,732 ft). The name Courchevel 1850 was chosen for marketing reasons to compete with rival ski resort Val dIsère. It is the Jardin Alpin area of Courchevel 1850 rather than the centre which is located at 1,850 metres (6,070 ft). Courchevel used to be part of the commune of Saint-Bon-Tarentaise, but in 2017 that was merged with La Perrière into the new commune of Courchevel. In spite of the name, the communes administrative offices are not located in Courchevel, but still in the nearby village of Saint-Bon-Tarentaise. Courchevel is in the Tarentaise Valley, Savoie département, Auvergne-Rhône-Alpes region. Courchevel is part of the Trois Vallées, which comprises the resorts of Courchevel, La Tania, Méribel, Les Menuires-Saint Martin, Val Thorens and Orelle. The original resort was planned during World War II with a study in 1942 by the Vichy regime and in a doctorate by the town planner Laurent Chappis. Chappis was a natural choice to direct the development of the resort in the immediate post war years. Courchevel 1850 was significant, as it was the first resort in France to be constructed from scratch, rather than based around an existing village. Within the Tarentaise Valley you find the biggest concentration of world-class ski resorts in the world. Most well known neighbour systems are Paradiski (Les Arcs, La Plagne) and Espace Killy (Val dIsère and Tignes). A weekly lift ticket in Courchevel/Les Trois Vallées gives you a choice to ski one day in each of the other two systems mentioned. There were once plans to interlink all systems and resorts to create the – by far – largest ski area in the world. However, that vision was ended with the creation of the Vanoise National Park.'
                categoryName='Winter destination'
                categoryLink='/winter'
                travelPrice='2,500 EUR'
            >
            </DestinationPage>
        </div>
    )
}
export default Courchevel;

