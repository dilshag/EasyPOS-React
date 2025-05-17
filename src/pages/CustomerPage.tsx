import React, { useState } from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';

// Define Customer type
interface Customer {
    id: string;
    name: string;
    dob: string;
    address: string;
}

const CustomerPage: React.FC = () => {
    // Sample initial data
    const initialCustomers: Customer[] = [
        { id: 'C001', name: 'Nimal Perera', dob: '1995-02-14', address: 'Colombo' },
        { id: 'C002', name: 'Kamal Silva', dob: '1990-06-23', address: 'Galle' },
        { id: 'C003', name: 'Sunethra Fernando', dob: '1988-11-05', address: 'Kandy' },
        { id: 'C004', name: 'Dinesh Jayasuriya', dob: '2000-01-09', address: 'Matara' },
    ];

    // State management
    const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
    const [openDialog, setOpenDialog] = useState<'add' | 'edit' | 'delete' | null>(null);
    const [currentCustomer, setCurrentCustomer] = useState<Customer>({
        id: '',
        name: '',
        dob: '',
        address: '',
    });
    const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);

    // Handle dialog open/close
    const handleOpenDialog = (type: 'add' | 'edit' | 'delete', customerId?: string) => {
        if (type === 'add') {
            setCurrentCustomer({ id: '', name: '', dob: '', address: '' });
        } else if (customerId) {
            const customer = customers.find((c) => c.id === customerId);
            if (customer) {
                setCurrentCustomer(customer);
                setSelectedCustomerId(customerId);
            }
        }
        setOpenDialog(type);
    };

    const handleCloseDialog = () => {
        setOpenDialog(null);
        setSelectedCustomerId(null);
    };

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCurrentCustomer((prev) => ({ ...prev, [name]: value }));
    };

    // CRUD operations
    const handleAddCustomer = () => {
        if (customers.some((c) => c.id === currentCustomer.id)) {
            alert('Customer ID already exists!');
            return;
        }
        setCustomers([...customers, currentCustomer]);
        handleCloseDialog();
    };

    const handleUpdateCustomer = () => {
        if (!selectedCustomerId) return;
        setCustomers(
            customers.map((customer) =>
                customer.id === selectedCustomerId ? currentCustomer : customer
            )
        );
        handleCloseDialog();
    };

    const handleDeleteCustomer = () => {
        if (!selectedCustomerId) return;
        setCustomers(customers.filter((customer) => customer.id !== selectedCustomerId));
        handleCloseDialog();
    };

    return (
        <Box sx={{ p: 3 }}>
            {/* Header and Add Button */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 3,
                }}
            >
                <Typography variant="h4">Customer Management</Typography>
                <Button
                    variant="contained"
                    startIcon={<Add />}
                    onClick={() => handleOpenDialog('add')}
                >
                    Add Customer
                </Button>
            </Box>

            {/* Customers Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{ backgroundColor: 'primary.main' }}>
                        <TableRow>
                            <TableCell sx={{ color: 'white' }}>ID</TableCell>
                            <TableCell sx={{ color: 'white' }}>Name</TableCell>
                            <TableCell sx={{ color: 'white' }}>Date of Birth</TableCell>
                            <TableCell sx={{ color: 'white' }}>Address</TableCell>
                            <TableCell sx={{ color: 'white' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map((customer) => (
                            <TableRow key={customer.id}>
                                <TableCell>{customer.id}</TableCell>
                                <TableCell>{customer.name}</TableCell>
                                <TableCell>{customer.dob}</TableCell>
                                <TableCell>{customer.address}</TableCell>
                                <TableCell>
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleOpenDialog('edit', customer.id)}
                                    >
                                        <Edit />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() => handleOpenDialog('delete', customer.id)}
                                    >
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Add Customer Dialog */}
            <Dialog open={openDialog === 'add'} onClose={handleCloseDialog}>
                <DialogTitle>Add New Customer</DialogTitle>
                <DialogContent sx={{ pt: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '400px' }}>
                        <TextField
                            name="id"
                            label="Customer ID"
                            value={currentCustomer.id}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                        <TextField
                            name="name"
                            label="Full Name"
                            value={currentCustomer.name}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                        <TextField
                            name="dob"
                            label="Date of Birth"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={currentCustomer.dob}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                        <TextField
                            name="address"
                            label="Address"
                            value={currentCustomer.address}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleAddCustomer} variant="contained">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Edit Customer Dialog */}
            <Dialog open={openDialog === 'edit'} onClose={handleCloseDialog}>
                <DialogTitle>Edit Customer</DialogTitle>
                <DialogContent sx={{ pt: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '400px' }}>
                        <TextField
                            name="id"
                            label="Customer ID"
                            value={currentCustomer.id}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            disabled
                        />
                        <TextField
                            name="name"
                            label="Full Name"
                            value={currentCustomer.name}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                        <TextField
                            name="dob"
                            label="Date of Birth"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={currentCustomer.dob}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                        <TextField
                            name="address"
                            label="Address"
                            value={currentCustomer.address}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleUpdateCustomer} variant="contained">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={openDialog === 'delete'} onClose={handleCloseDialog}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to delete customer {currentCustomer.name} (ID: {currentCustomer.id})?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleDeleteCustomer} color="error" variant="contained">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CustomerPage;