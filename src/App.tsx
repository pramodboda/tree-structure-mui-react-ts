import "./App.css";

import {
  CssBaseline,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { FolderTreeView } from "./components/FolderTreeView";
import { MenuTreeView } from "./components/MenuTreeView";
import { FamilyTreeView } from "./components/FamilyTreeView";
import { CompanyOrgChartTreeView } from "./components/CompanyOrgChartTreeView";

function App() {
  return (
    <>
      <Container>
        <CssBaseline />
        <Typography variant="h5" sx={{ my: 2 }}>
          📁 MUI TreeView – Flat to Tree Examples
        </Typography>
        <Typography variant="body2" component="p">
          Implemented <strong>Flat array</strong> converted into tree structure
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Card>
              <CardContent>
                <Typography variant="body1" sx={{ my: 2 }}>
                  📁 Folder Tree
                </Typography>
                <FolderTreeView />
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Card>
              <CardContent>
                <Typography variant="body1" sx={{ my: 2 }}>
                  📁 Menu Tree
                </Typography>
                <MenuTreeView />
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Card>
              <CardContent>
                <Typography variant="body1" sx={{ my: 2 }}>
                  📁 Family Tree
                </Typography>
                <FamilyTreeView />
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Card>
              <CardContent>
                <Typography variant="body1" sx={{ my: 2 }}>
                  📁 Company Org Chart
                </Typography>
                <CompanyOrgChartTreeView />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
