import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';

const MyListItem = styled(ListItem)(() => ({
    padding: '0',
    height: '50px',

    '& > a': {
        borderRadius: '10px',
    },
    '& > a:hover': {
        backgroundColor: 'rgba(25, 118, 210, 0.22)',
    }
}))

export default MyListItem;