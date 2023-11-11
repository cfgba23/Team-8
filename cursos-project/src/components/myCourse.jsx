import {Button, Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import './myCourses.css';

function MyCourses(){
    const events = [
        {
                "id": 1,
                "titulo": "Finanzas Personales",
                "imagen": "../images/finanzas.png",
                "fecha_inicio": "2023-01-15",
                "fecha_finalizacion": "2023-02-15"
            },
            {
                "id": 2,
                "titulo": "Atención al Cliente",
                "imagen": "../images/negocios.png",
                "fecha_inicio": "2023-02-01",
                "fecha_finalizacion": "2023-03-01"
            },
            {
                "id": 3,
                "titulo": "Posventa Estratégica",
                "imagen": "../images/Posventa.png",
                "fecha_inicio": "2023-03-10",
                "fecha_finalizacion": "2023-04-10"
            }
        ];

    return (
        <div className="my-course-container">
            {events.map(event =>
                    <Card key={event.id} sx={{ maxWidth: 345 }} className="my-card">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={event.imagen}
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {event.titulo}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {event.descripcion}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Inicio: {event.fecha_inicio}
                            </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Finalizacion: {event.fecha_finalizacion}
                            </Typography>
                    </CardContent>
                    <Button style ={{borderRadius: '20px', border:'1px blue', backgroundColor:'white'}}>
                        Ver más
                    </Button>
                </CardActionArea>
            </Card>
            )}
        </div>
    );
}
export default MyCourses;