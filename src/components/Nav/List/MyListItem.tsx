import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';

const MyListItem = styled(ListItem)(() => ({
    padding: '0',
    height: '50px',

    '& > a': {
        borderRadius: '10px',
    }
}))

export default MyListItem;