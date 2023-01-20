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
              <Typography>{store.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {store.associated_products.map((product: any) => {
                return(
                  <Typography>{product.name}</Typography>
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