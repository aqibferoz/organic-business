import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { VenuePage } from '../venue/venue';
import { AnalyticsPage } from '../analytics/analytics';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = VenuePage;
  tab3Root = ContactPage;
  tab4Root = AnalyticsPage;

  constructor() {

  }
}
