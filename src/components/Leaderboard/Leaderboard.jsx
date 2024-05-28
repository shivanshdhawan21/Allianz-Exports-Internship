import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import {Container, Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography, IconButton} from '@mui/material';
import { TrendingUp, TrendingDown, Chat, ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { styled } from '@mui/system';
import './leaderboard.scss';

const StyledContainer = styled(Container)({
  marginTop: '20px',
});

const StyledTable = styled(Table)({
  minWidth: 650,
});

const data = [
  { rank: 1, name: 'Selling with re entry', old_calmar_ratio: 3.00, calmar_ratio: 3.96, overall_profit: 381845, avg_daily_profit: 319.54, win_percent_daily: 0.65, price: '-' },
  { rank: 2, name: 'Strategy_name', old_calmar_ratio: 3.00, calmar_ratio: 3.62, overall_profit: 268872.5, avg_daily_profit: 216.31, win_percent_daily: 0.64, price: 500 },
  { rank: 3, name: 'Based on premium', old_calmar_ratio: 3.12, calmar_ratio: 3.42, overall_profit: 255425, avg_daily_profit: 208.51, win_percent_daily: 0.64, price: '-' },
  { rank: 4, name: 'Strategy_name', old_calmar_ratio: 3.6, calmar_ratio: 3.22, overall_profit: 370845, avg_daily_profit: 303.47, win_percent_daily: 0.65, price: '-' },
  { rank: 5, name: 'Strategy_name', old_calmar_ratio: 3.40, calmar_ratio: 3.22, overall_profit: 370845, avg_daily_profit: 303.47, win_percent_daily: 0.65, price: '-' },
  { rank: 6, name: 'Based on premium wit', old_calmar_ratio: 2.91, calmar_ratio: 3.01, overall_profit: 255425, avg_daily_profit: 303.47, win_percent_daily: 0.49, price: '-' },
  { rank: 7, name: 'Strategy_name', old_calmar_ratio: 2.51, calmar_ratio: 2.76, overall_profit: 135980, avg_daily_profit: 185.77, win_percent_daily: 0.6, price: '-' },
  { rank: 8, name: 'Based on premium wit', old_calmar_ratio: 2.7, calmar_ratio: 2.56, overall_profit: 381845, avg_daily_profit: 218.49, win_percent_daily: 0.65, price: '-' },
  { rank: 9, name: 'Selling with re entry', old_calmar_ratio: 2.67, calmar_ratio: 2.11, overall_profit: 381845, avg_daily_profit: 216.31, win_percent_daily: 0.5, price: 1000 },
  { rank: 10, name: 'Based on premium', old_calmar_ratio: 3.00, calmar_ratio: 2.03, overall_profit: 268872.5, avg_daily_profit: 185.77, win_percent_daily: 0.68, price: '-' },
];

const Leaderboard = () => {
  const [stocks, setStocks] = useState(data);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('rank');

  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);

    const sortedStocks = [...stocks].sort((a, b) => {
      if (isAsc) {
        return a[property] < b[property] ? -1 : 1;
      } else {
        return a[property] > b[property] ? -1 : 1;
      }
    });

    setStocks(sortedStocks);
  };

  return (
    <>
      <div className='content'>
        <Navbar />
        <div className='heading'>LeaderBoards</div>
        <StyledContainer>
          <Typography variant="h4" gutterBottom>Basic Backtest</Typography>
          <Paper sx={{borderRadius:"20px", boxShadow:"0 5px 10px 0 rgba(0, 0, 0, 0.5), 0 6px 40px 0 rgba(0, 0, 0, 0.19)"}}>
            <StyledTable>
              <TableHead>
                <TableRow> 
                  {[
                    { label: 'Rank', property: 'rank' },
                    { label: 'Name', property: 'name' },
                    { label: 'Calmar Ratio', property: 'calmar_ratio' },
                    { label: 'Overall Profit', property: 'overall_profit' },
                    { label: 'Avg. Daily Profit', property: 'avg_daily_profit' },
                    { label: 'Win %(Daily)', property: 'win_percent_daily' },
                    { label: 'Price (Rs)', property: 'price' },
                    { label: 'Action', property: null }
                  ].map((column, index) => (
                    <TableCell key={index} style={{fontSize: '20px', fontWeight: 'bolder' }}>
                      <div style={{display:"flex",alignItems:"center"}}>{column.label}
                        {column.property && (
                          <IconButton
                            onClick={() => handleRequestSort(column.property)}
                            size="small"
                          >
                            {orderBy === column.property && order === 'asc' ? (
                              <ArrowUpward style={{fontSize:"20px"}}/>
                            ) : (
                              <ArrowDownward style={{fontSize:"20px"}}/>
                            )}
                          </IconButton>
                        )}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {stocks.map((stock) => (
                  <TableRow
                    key={stock.rank}
                    onMouseEnter={() => handleMouseEnter(stock.rank)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      transitionDuration: hoveredRow === stock.rank ? '0.3s' : '0',
                      transform: hoveredRow === stock.rank ? 'scale(1.01)' : 'scale(1)',
                      backgroundColor: hoveredRow === stock.rank ? 'rgb(228, 236, 240)' : 'white',
                      boxShadow: hoveredRow === stock.rank ? '0 5px 10px 0 rgba(0, 0, 0, 0.5), 0 6px 40px 0 rgba(0, 0, 0, 0.19)' : 'none',
                    }}
                  >
                    <TableCell style={{fontSize: '15px'}}>{stock.rank}</TableCell>
                    <TableCell style={{fontSize: '15px'}}>{stock.name}</TableCell>
                    {stock.calmar_ratio - stock.old_calmar_ratio >= 0 ? (
                      <TableCell style={{fontSize: '15px'}}>{stock.old_calmar_ratio} <TrendingUp style={{ color: 'green' }} /> {stock.calmar_ratio}</TableCell>
                    ) : (
                      <TableCell style={{fontSize: '15px'}}>{stock.old_calmar_ratio} <TrendingDown style={{ color: 'red' }} /> {stock.calmar_ratio}</TableCell>
                    )}
                    <TableCell style={{fontSize: '15px'}}>{stock.overall_profit}</TableCell>
                    <TableCell style={{fontSize: '15px'}}>{stock.avg_daily_profit}</TableCell>
                    <TableCell style={{fontSize: '15px'}}>{stock.win_percent_daily}</TableCell>
                    <TableCell style={{fontSize: '15px'}}>{stock.price}</TableCell>
                    <TableCell style={{fontSize: '15px'}}>
                      {stock.price > 0 ? (
                        <button className='btn'>Buy</button>
                      ) : (
                        <button className='btn'>View</button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
          </Paper>
        </StyledContainer>
      </div>
      <div className='chat'><Chat style={{ color: 'white', padding: '8px 8px' }} /></div>
    </>
  );
};

export default Leaderboard;
