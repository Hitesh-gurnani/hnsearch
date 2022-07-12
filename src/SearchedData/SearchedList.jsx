import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function SearchedList({ author, id, points, title, url }) {
    const navigate = useNavigate();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    function getIdData() {
        navigate("/Idsearch")
    }
    // useEffect(() => {
    //     async function getValues() {
    //         const res = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
    //         const data = await res.json();
    //         console.log(data)
    //     }
    //     getValues();
    // }, [flag])
    return (
        <Card sx={{ maxWidth: '100%' }} style={{ margin: '10px' }}>


            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <h2>{title}</h2>
                </Typography>
                {id}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Author's name : <i>{author}</i> </Typography>
                    <Typography paragraph>
                        <Link href={url} underline="none">
                            Get more detail
                        </Link>
                    </Typography>
                    <Button onClick={getIdData}>ok</Button>
                    <Typography paragraph>

                        <p style={{ fontsize: '10px' }}><h7>Points earned:</h7><b>{points}</b></p>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}