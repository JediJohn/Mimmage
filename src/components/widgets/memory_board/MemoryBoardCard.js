import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from './memory_board_style.module.scss'

const MemoryBoardCard = ({title, text, board_id, image}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Memory board screenshot"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography className={styles.textBodyPreview} variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Link className={styles.cardLinks} to={`/edit/${board_id}`}>
            <Button size="small">Edit</Button>
        </Link>
        <Link className={styles.cardLinks} to={`/memorize/${board_id}`}>
            <Button size="small"> Start Memorizing</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default MemoryBoardCard;