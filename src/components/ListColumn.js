// ListColumn.js

import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const ListColumn = ({ title, list, type, grade }) => {
  const downloadList = () => {
    console.log(`Descargando lista de ${title.toLowerCase()}`);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom color="primary">
          {title}
        </Typography>
        <List>
          {list.map((item, idx) => (
            <React.Fragment key={idx}>
              <ListItem>
                <ListItemText primary={item} />
              </ListItem>
              {idx < list.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
        <Button 
          variant="outlined" 
          color="primary" 
          startIcon={<DownloadIcon />}
          fullWidth
          sx={{ mt: 2 }}
          onClick={downloadList}
        >
          Descargar lista de {title.toLowerCase()}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ListColumn;
