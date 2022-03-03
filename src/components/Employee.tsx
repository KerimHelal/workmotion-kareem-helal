import { FC } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import EmployeeState from './EmployeeState';
import { Employee } from '../types';

const EmployeeRecord: FC<{ employee: Employee }> = ({ employee }) => {
    return (
        <ListItem sx={{ margin: '8px 0 8px 0' }}>
            <ListItemIcon>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText
                primary={employee.name}
                secondary={employee.job}
            />
            <ListItemSecondaryAction>
                <EmployeeState state={employee.state} id={employee.id} />
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default EmployeeRecord;
