import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface ResultsDisplayProps {
  info: any;
}

const ResultsDisplay:React.FC<ResultsDisplayProps> = ({
  info
}) => {

  return(
    <div>
      {info.stores.map((store:any) => {
        return(
          <Accordion>
            <AccordionSummary
              expandIcon={<AddCircleOutlineIcon />}
            >
              <img 
                src={store.logo_url} 
                alt={store.name}
                style={{height: '10vh', width:'10vw'}}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='h5'>Store: {store.name}</Typography>
              {store.associated_products.map((product: any) => {
                return(
                  <Typography>{product.name} ${product.best_price}</Typography>
                )
              })}
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  );
}

export default ResultsDisplay;