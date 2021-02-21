import AppFrame from './AppFrame'
import {BrowserRouter as Router} from 'react-router-dom'

export default {
    title: 'AppFrame',
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            <h2>Prueba</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero eveniet quae assumenda maxime, aliquam quasi non, nobis iusto aperiam voluptatem doloribus veritatis temporibus enim at vitae corporis sint pariatur aliquid. Saepe fugit atque voluptates consequatur. Sed inventore doloribus porro illum harum nulla, pariatur eveniet vitae fugiat libero error facere dignissimos quo nobis assumenda ea itaque? Numquam fugit amet neque, itaque doloribus repellat a ad repudiandae optio temporibus nesciunt eligendi eveniet accusamus enim consequuntur suscipit sunt. Suscipit earum soluta modi in tenetur possimus ex temporibus! Dignissimos officiis in quia quis velit at cumque, quas, a, quasi quo odit rerum fuga consequatur.</p>
        </AppFrame>
    </Router>)