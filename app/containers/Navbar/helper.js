const breadCrumbValueFunc = breadcrumbValue => {
  if (breadcrumbValue === '/member' || breadcrumbValue === '/') {
    return ['Home', 'Members'];
  }
  if (breadcrumbValue === '/settings/general') {
    return ['Home', 'Settings', 'General'];
  }
  if (breadcrumbValue === '/settings/account') {
    return ['Home', 'Settings', 'Account'];
  }
  if (breadcrumbValue === '/settings/bot') {
    return ['Home', 'Settings', 'Bot'];
  }
  if (breadcrumbValue === '/settings/app') {
    return ['Home', 'Settings', 'App'];
  }
  if (breadcrumbValue === '/settings/messages') {
    return ['Home', 'Settings', 'Messages'];
  }
  if (breadcrumbValue === '/settings/ticket') {
    return ['Home', 'Settings', 'Ticket'];
  }
  if (breadcrumbValue === '/settings/meet') {
    return ['Home', 'Settings', 'Meet'];
  }
  if (breadcrumbValue === '/settings/workdays') {
    return ['Home', 'Settings', 'Workdays And Holidays'];
  }
  if (breadcrumbValue === '/member/invite') {
    return ['Home', 'Member', 'Invite'];
  }
  if (breadcrumbValue === '/member/guest') {
    return ['Home', 'Guest', 'Invite'];
  }
  if (breadcrumbValue.includes('/member/profile')) {
    return ['Home', 'Member', 'Profile'];
  }
  if (breadcrumbValue === '/service/offered') {
    return ['Home', 'Project'];
  }
  if (breadcrumbValue === '/projectslist') {
    return ['Home', 'Projects'];
  }
  if (breadcrumbValue === '/services/enabled') {
    return ['Projects', 'Enabled'];
  }
  if (breadcrumbValue === '/service/custom') {
    return ['Projects'];
  }
  if (breadcrumbValue === '/projects/create') {
    return ['Home', 'Projects', 'Create'];
  }
  if (breadcrumbValue.includes('/projects/detail/')) {
    return ['Home', 'Projects', 'Detail'];
  }
  if (breadcrumbValue === '/member') {
    return ['Home'];
  }
  if (breadcrumbValue.includes('/board/ticket')) {
    return ['Home', 'Board'];
  }
  if (breadcrumbValue.includes('/ticket/list/assigned')) {
    return ['Home', 'Assigned To Me'];
  }
  if (breadcrumbValue.includes('/ticket/list/created')) {
    return ['Home', 'Created By Me'];
  }
  if (breadcrumbValue.includes('/ticket/list/requested')) {
    return ['Home', 'Requested By Me'];
  }
  if (breadcrumbValue.includes('/ticket/list/contributed')) {
    return ['Home', 'Contributed'];
  }
  if (breadcrumbValue.includes('/ticket/list/subscribed')) {
    return ['Home', 'Subscribed'];
  }
  if (breadcrumbValue.includes('/ticket/list/unassign')) {
    return ['Home', 'Unassigned'];
  }
  if (breadcrumbValue.includes('/ticket/list/all')) {
    return ['Home', 'All'];
  }
  if (breadcrumbValue.includes('/backlogticket/detail/')) {
    return ['Home', 'Ticket', 'Detail'];
  }
  if (breadcrumbValue.includes('/pendingticket/detail/')) {
    return ['Home', 'Board', 'Detail'];
  }
  if (breadcrumbValue.includes('/inprogressticket/detail/')) {
    return ['Home', 'Ticket', 'Detail'];
  }
  if (breadcrumbValue.includes('/ticket/detail/')) {
    return ['Home', 'Ticket', 'Detail'];
  }
  if (breadcrumbValue.includes('/closedticket/detail/')) {
    return ['Home', 'Ticket', 'Detail'];
  }
  if (breadcrumbValue.includes('/subscribedticket/detail/')) {
    return ['Home', 'Subscribed Ticket', 'Detail'];
  }
  if (breadcrumbValue.includes('/contributedticket/detail/')) {
    return ['Home', 'Contributed Ticket', 'Detail'];
  }
  if (breadcrumbValue === '/conversation') {
    return ['Home', 'Messages'];
  }
  if (breadcrumbValue === '/calls') {
    return ['Home', 'Calls'];
  }
  if (breadcrumbValue === '/conversation/suggestedticket') {
    return ['Home', 'Messages', 'Suggested Ticket'];
  }
  if (breadcrumbValue.includes('/conversation/detail/')) {
    return ['Home', 'Messages', 'Detail'];
  }
  if (breadcrumbValue === '/analytics/lead') {
    return ['Home', 'Lead Generation'];
  }
  if (breadcrumbValue === '/analytics/overview') {
    return ['Home', 'Overview'];
  }
  if (breadcrumbValue === '/analytics/engagement') {
    return ['Home', 'Engagement'];
  }
  if (breadcrumbValue === '/channel/labels') {
    return ['Home', 'Labels'];
  }
  if (breadcrumbValue === '/inbox') {
    return ['Home', 'Inbox'];
  }
  if (breadcrumbValue === '/bot') {
    return ['Home', 'Bot'];
  }
  if (
    breadcrumbValue.includes('/bot/') &&
    breadcrumbValue.includes('/general')
  ) {
    return ['Home', 'Bot', 'Detail'];
  }
  if (breadcrumbValue.includes('/bot/intent/import/')) {
    return ['Home', 'Bot', 'Intent', 'Import'];
  }
  if (breadcrumbValue.includes('/bot/imported/intents/')) {
    return ['Home', 'Bot', 'Imported Intents'];
  }
  if (
    breadcrumbValue.includes('/bot/') &&
    (breadcrumbValue.includes('/intent') ||
      breadcrumbValue.includes('/entity')) &&
    !breadcrumbValue.includes('/bot/intent/create/')
  ) {
    return ['Home', 'Bot', 'Detail'];
  }
  if (breadcrumbValue.includes('/bot/intent/create/')) {
    return ['Home', 'Bot', 'Intent', 'Create'];
  }
  if (breadcrumbValue.includes('/bot/intent/import/')) {
    return ['Home', 'Bot', 'Intent', 'Import'];
  }
  if (
    breadcrumbValue.includes('/bot/detail/') &&
    breadcrumbValue.includes('/intent/')
  ) {
    return ['Home', 'Bot', 'Intent'];
  }
  if (breadcrumbValue === '/automated/replies') {
    return ['Home', 'Automated Replies'];
  }
  if (breadcrumbValue.includes('/automated/replies/fixed/')) {
    return ['Home', 'Automated Replies', 'Fixed Reply'];
  }
  if (breadcrumbValue.includes('/automated/replies/resolution/')) {
    return ['Home', 'Automated Replies', 'Resolution Reply'];
  }
  if (breadcrumbValue === '/kgraph') {
    return ['Home', 'Automated Replies'];
  }
  if (breadcrumbValue === '/knowledge/graph/suggestion') {
    return ['Home', 'Automated Replies', 'Suggested Automated Replies'];
  }
  if (breadcrumbValue === '/auto/ticket/create') {
    return ['Home', 'Auto Ticket Create'];
  }
  if (breadcrumbValue === '/auto/api') {
    return ['Home', 'Api'];
  }
  if (breadcrumbValue === '/team') {
    return ['Home', 'Team'];
  }
  if (breadcrumbValue.includes('/team/detail')) {
    return ['Home', 'Team', 'Detail'];
  }
  if (breadcrumbValue.includes('/integration/')) {
    return ['Home', 'Integration'];
  }
  if (breadcrumbValue.includes('/service/api/create/')) {
    return ['Home', 'Api', 'Create'];
  }
  if (breadcrumbValue.includes('/service/api/update/')) {
    return ['Home', 'Api', 'Update'];
  }
  if (breadcrumbValue.includes('/billing/')) {
    return ['Home', 'Billing'];
  }
  if (breadcrumbValue.includes('/posts')) {
    return ['Home', 'Posts'];
  }
  if (
    breadcrumbValue.includes('/ticketsettings/') ||
    breadcrumbValue.includes('/settings/')
  ) {
    return ['Home', 'Settings'];
  }
  if (breadcrumbValue.includes('/member/import')) {
    return ['Home', 'Member', 'New'];
  }

  return [];
};
export const BreadCrumbValueFunc = breadCrumbValueFunc;

const breadCrumbPathFunc = breadcrumbPath => {
  if (breadcrumbPath === '/member') {
    return ['/member'];
  }
  if (
    breadcrumbPath === '/member/invite' ||
    breadcrumbPath === '/member/guest' ||
    breadcrumbPath === '/member/import'
  ) {
    return ['/member', '/member'];
  }
  if (breadcrumbPath.includes('/member/profile')) {
    return ['/member', '/member'];
  }
  if (breadcrumbPath === '/service/offered') {
    return ['/service/offered'];
  }
  if (breadcrumbPath === '/projectslist') {
    return ['/dashboard', '/projectslist'];
  }
  if (breadcrumbPath === '/services/enabled') {
    return ['/service/offered'];
  }

  if (breadcrumbPath.includes('/analytics')) {
    return ['/dashboard', '/analytics'];
  }
  if (breadcrumbPath.includes('/analytics/engagement')) {
    return ['/dashboard', '/analytics/engagement'];
  }

  if (breadcrumbPath === '/inbox') {
    return ['/dashboard', '/inbox'];
  }
  if (breadcrumbPath === '/bot') {
    return ['/bot', '/bot'];
  }
  if (breadcrumbPath.includes('/bot/') && breadcrumbPath.includes('/general')) {
    return ['/bot', '/bot'];
  }
  if (breadcrumbPath.includes('/bot/') && breadcrumbPath.includes('/intent')) {
    return ['/bot', '/bot'];
  }
  if (breadcrumbPath.includes('/bot/') && breadcrumbPath.includes('/entity')) {
    return ['/bot', '/bot'];
  }
  if (breadcrumbPath.includes('/bot/imported/intents/')) {
    return ['/bot', '/bot'];
  }
  if (breadcrumbPath === '/auto/ticket/create') {
    return ['/auto/ticket/create', '/auto/ticket/create'];
  }
  if (breadcrumbPath === '/auto/api') {
    return ['/auto/api', '/auto/api'];
  }
  if (
    breadcrumbPath.includes('/bot/detail/') &&
    breadcrumbPath.includes('/intent/')
  ) {
    return ['/bot/intent', '/bot/intent', ''];
  }
  if (breadcrumbPath.includes('/bot/intent/import/')) {
    return ['/bot/intent', '/bot/intent', '/bot/intent'];
  }
  if (breadcrumbPath.includes('/bot/intent/create/')) {
    return ['/bot/intent', '/bot/intent', '/bot/intent'];
  }
  if (breadcrumbPath === '/automated/replies') {
    return ['/automated/replies', ''];
  }
  if (
    breadcrumbPath.includes('/automated/replies/fixed') ||
    breadcrumbPath.includes('/automated/replies/resolution')
  ) {
    return ['/automated/replies', '/automated/replies'];
  }
  if (breadcrumbPath === '/kgraph') {
    return ['/kgraph', '/kgraph'];
  }
  if (breadcrumbPath === '/knowledge/graph/suggestion') {
    return ['/kgraph', '/kgraph', ''];
  }
  if (breadcrumbPath === '/team') {
    return ['/team', '/team'];
  }
  if (breadcrumbPath.includes('/team/detail')) {
    return ['/team', '/team', ''];
  }

  if (
    breadcrumbPath.includes('/service/api/create/') ||
    breadcrumbPath.includes('/service/api/update/')
  ) {
    return ['/auto/api', '/auto/api', '/auto/api'];
  }
  if (breadcrumbPath.includes('/billing')) {
    return ['/billing', '/billing'];
  }
  return [];
};
export const BreadCrumbPathFunc = breadCrumbPathFunc;
