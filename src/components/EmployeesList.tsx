import { FC, Fragment } from 'react';
import List from '@mui/material/List';
import { Card, Divider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Employee } from '../types';
import EmployeeRecord from "./Employee";
import useFetch from '../hooks/useFetch';

const EmployeesList: FC<{}> = () => {

    const { data: employees, loading, errorMEssage } = useFetch("http://localhost:8000/employees");

    const renderEmployees = () => {
        return employees?.map((employee: Employee, index: number) => {
            return (
                <Fragment key={index}>
                    <EmployeeRecord employee={employee} />
                    {index !== employees.length - 1 && <Divider light />}
                </Fragment>
            )
        })
    }

    return (
        <Card sx={{ minWidth: 275, minHeight: 150, marginTop: 5 }}>
            {loading && <CircularProgress />}
            {errorMEssage && <p style={{ textAlign: 'center' }}>{errorMEssage}</p>}
            {employees?.length && <List>{renderEmployees()}</List>}
        </Card>

    );
}

export default EmployeesList;