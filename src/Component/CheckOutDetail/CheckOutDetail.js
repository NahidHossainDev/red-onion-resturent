import React from 'react';
import { Container, Grid,Box } from '@material-ui/core';

const CheckOutDetail = () => {
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, incidunt a fuga consequuntur maiores odio itaque cupiditate dolor doloremque tempore nemo, fugiat suscipit quasi quis soluta quos labore, porro aliquam. Ex fuga similique et? Iure, nihil repudiandae. Accusamus, facilis neque illo perferendis saepe unde nesciunt minus odit officia, officiis, quas doloremque debitis! Facere itaque temporibus sed aperiam numquam illum fuga et impedit laudantium atque iusto tempore doloremque ad ea commodi, eaque sit exercitationem, autem, aliquid repudiandae enim! Debitis at commodi vel. Commodi magnam reiciendis fugiat laudantium voluptatum, corrupti rerum aperiam sit saepe odit, necessitatibus pariatur velit, dignissimos enim qui natus!</Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sapiente reprehenderit nam velit consectetur, odit at dolores beatae perferendis repudiandae obcaecati explicabo ad praesentium aliquid illo neque voluptates veniam quaerat?</Box>
          </Grid>
        </Grid>
      </Container>
    );
};

export default CheckOutDetail;