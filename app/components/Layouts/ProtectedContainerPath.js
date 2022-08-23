import BotDetail from 'containers/Bot/BotConfigurationTab/Loadable';
import IntentDetail from 'containers/IntentDetail/Loadable';
import CreateIntent from 'containers/CreateIntentPage/Loadable';
import BotList from '../../containers/Bot/BotList';
import AutomatedReplies from '../../containers/AutomatedReply/AutomatedReplies/Loadable';
import AutoTicketCreate from '../../containers/AutoTicketCreate/Loadable';
import FixedReply from '../../containers/AutomatedReply/FixedReply/Loadable';
import ResolutionReply from '../../containers/AutomatedReply/ResolutionReply/Loadable';
import UpdateApi from '../../containers/UpdateApi';
import CreateApi from '../../containers/CreateApi';
import ImportedIntentList from '../../containers/ImportIntent/ImportedIntentList/Loadable';
import IntentImportPage from '../../containers/ImportIntent/IntentImportPage/Loadable';
import ListApi from '../../containers/ListApi';

import Settings from '../../containers/Settings/index';
export const ProtectedContainerPath = [
  {
    path: '/bot',
    component: BotList,
  },
  {
    path: '/automated/replies',
    component: AutomatedReplies,
  },
  {
    path: '/auto/ticket/create',
    component: AutoTicketCreate,
  },
  {
    path: '/auto/api',
    component: ListApi,
  },
  {
    path: '/automated/replies/fixed/:id',
    component: FixedReply,
  },
  {
    path: '/automated/replies/resolution/:id',
    component: ResolutionReply,
  },
  {
    path: '/service/api/update/:serviceId/:apiId',
    component: UpdateApi,
  },
  {
    path: '/service/api/create/:serviceId',
    component: CreateApi,
  },
  {
    path: '/bot/:id/:tab/:language',
    component: BotDetail,
  },
  {
    path: '/bot/imported/intents/:botId/:language',
    component: ImportedIntentList,
  },
  {
    path: '/bot/intent/import/:botId/:language',
    component: IntentImportPage,
  },
  {
    path: '/bot/detail/:botId/intent/:intentId/:language',
    component: IntentDetail,
  },
  { path: '/bot/intent/create/:botId/:language', component: CreateIntent },

  // user settings
  {
    path: '/settings/general',
    component: Settings,
  },
  {
    path: '/settings/account',
    component: Settings,
  },
  {
    path: '/settings/bot',
    component: Settings,
  },
  {
    path: '/settings/app',
    component: Settings,
  },
  {
    path: '/settings/meet',
    component: Settings,
  },
  {
    path: '/settings/workdays',
    component: Settings,
  },
  {
    path: '/settings/ticket',
    component: Settings,
  },
  {
    path: '/settings/messages',
    component: Settings,
  },
];
