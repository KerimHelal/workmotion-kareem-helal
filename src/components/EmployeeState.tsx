import { FC, useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Backdrop from '@mui/material/Backdrop';
import { CircularProgress } from '@mui/material';

const EmployeeState: FC<{ id: number, state: string }> = ({ id, state }) => {

    const [value, setValue] = useState(state);
    const [loading, setLoading] = useState(false);

    const handleChange = (event: React.SyntheticEvent, value: string) => {
        setLoading(true);
        fetch(`http://localhost:8000/employees/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ state: value }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => {
                setLoading(false);
                if (!res.ok) throw new Error('Could not Update Employee!');
                setValue(value);
            })
            .catch(error => {
                setLoading(false);
                console.log(error)
            });
    }

    const handleStopLoading = () => {
        setLoading(false);
    };

    return (
        <>
            <ToggleButtonGroup
                color="primary"
                value={value}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="ADDED">Added</ToggleButton>
                <ToggleButton value="In-Check">In-Check</ToggleButton>
                <ToggleButton value="Approved">Approved</ToggleButton>
                <ToggleButton value="Active">Active</ToggleButton>
                <ToggleButton value="In-Active">In-Active</ToggleButton>
            </ToggleButtonGroup>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
                onClick={handleStopLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}

export default EmployeeState;
