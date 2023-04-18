import React from 'react';
import {Collapse, Grid, List, ListItemButton, ListItemText, ListSubheader, Typography, withStyles} from "@mui/material";
import styles from './Documentation.module.scss';
import {ExpandLess, ExpandMore} from "@mui/icons-material";


const Documentation = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Grid className={styles.docMain}>
            <Grid sx={{height: '100%'}} container>
                <Grid item sx={{background: '#F1F5F9', opacity: '70%', height: '100%', padding: '50px'}} md={2}>
                    gvrtgrt
                    <List
                        sx={{
                            width: '100%', maxWidth: 360,
                            // selected and (selected + hover) states
                            '&& .Mui-selected, && .Mui-selected:hover': {
                                bgcolor: '#F1F5F9',
                                opacity: '70%',
                                '&, & .MuiListItemIcon-root': {
                                    color: 'black',
                                },
                            },
                            '&& .Mui-selected, && .Mui-selected:target': {
                                bgcolor: '#F1F5F9',
                                opacity: '70%',
                                '&, & .MuiListItemIcon-root': {
                                    color: 'black',
                                },
                            },
                            // hover states
                            '& .MuiListItemButton-root:hover': {
                                bgcolor: '#F1F5F9',
                                opacity: '70%',
                                '&, & .MuiListItemIcon-root': {
                                    color: 'black',
                                },
                            },
                            '& .MuiListItemButton-root:target': {
                                bgcolor: '#F1F5F9',
                                opacity: '70%',
                                '&, & .MuiListItemIcon-root': {
                                    color: 'black',
                                },
                            },
                        }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton sx={{padding: '0px'}} onClick={handleClick}>
                            <ListItemText primary="Inbox" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{padding: '0px', paddingLeft: '14px' }}>
                                    <ListItemText primary="Starred" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Grid>
                <Grid item md={10}>
                    <Grid sx={{background: '#F1F5F9', opacity: '70%', height: 'calc(100% - 150px)', margin: '45px 70px', padding: '50px'}}>
                        <Typography sx={{fontSize: '14px'}}>
                            Approach: The given problem can be solved by using Disjoint Set Union Data Structure. The idea is to store all the queries in an array, initially, all the elements are in different sets, process the queries in reverse order, for each query make union operation for the current element with its left and right side elements using the find operation, parallelly keep track of the maximum element then store it in an array, then print the array elements in the reverse order. Follow the steps below to solve the problem:
                            Initialize the vectors parent(N + 1), rank(N + 1, 0), setSum(N + 1, 0) and currMax.
                            Iterate over the range [1, N+1) using the variable i and set the value of parent[i] as -1 and setSum[i] as arr[i – 1].
                            Push the value 0 into the vector currMax[] because after the last query the answer will be 0.
                            Iterate over the range [N – 1, 0] in the reverse order using the variable i and perform the following steps:
                            If parent[queries[I]] is -1, then set it as queries[i].
                            If queries[i] – 1  0 && parent[queries[i] – 1] != -1, then call for function operation union(parent, rank, setSum, queries[I], queries[I]-1).
                            If queries[i] + 1  N && parent[queries[i] + 1] != -1, then call for function operation union(parent, rank, setSum, queries[I], queries[I]+1).
                            Set the value of maxAns as the maximum of maxAns or setSum[queries[I]] and push the value of maxAns into the vector currMax[].
                            Reverse the vector currMax[] and print it’s values as the answer.
                            Below is the implementation of the above algorithm:
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Documentation;
