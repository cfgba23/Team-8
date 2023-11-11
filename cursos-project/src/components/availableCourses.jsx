import {Button, Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import './myCourses.css'
function AvailableCourses() {
    const events = [
        {
            "id": 4,
            "titulo": "Marketing Digital para Emprendedores",
            "imagen": "images/marketing.png",
            "fecha_inicio": "2023-04-05",
            "fecha_finalizacion": "2023-05-05"
        },
        {
            "id": 5,
            "titulo": "Gestión Efectiva del Tiempo",
            "imagen": "../images/gestion-efectiva.png",
            "fecha_inicio": "2023-05-20",
            "fecha_finalizacion": "2023-06-20"
        },
        {
            "id": 6,
            "titulo": "Desarrollo de Ideas de Negocio",
            "imagen": "../images/desarrollo.png",
            "fecha_inicio": "2023-06-01",
            "fecha_finalizacion": "2023-07-01"
        }

        ];
    return (
        <div style ={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width:' calc(345px * 3)', marginTop:'60px', marginLeft:'-20px'}}>
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
                        <Button>
                            Ver más
                        </Button>
                    </CardActionArea>
                </Card>
            )}
        </div>
    );
}
export default AvailableCourses;