export const checkActiveForSideNavbar = location => {
  if (location === '/member') {
    return '/member';
  }
  if (location === '/member/import') {
    return '/member';
  }

  if (location.includes('/bot') || location.includes('/intent')) {
    return '/bot';
  }
  if (
    location.includes('/automated/replies') ||
    location.includes('/kgraph') ||
    location.includes('/knowledge/graph/')
  ) {
    return '/automated/replies';
  }
  if (location === '/auto/ticket/create') {
    return '/auto/ticket/create';
  }
  if (location === '/auto/api') {
    return '/auto/api';
  }
  if (location.includes('/team')) {
    return '/team';
  }
  if (location.includes('/billing')) {
    return '/billing';
  }
  if (location.includes('/calendar')) {
    return '/calendar';
  }
  if (location === '/workspace/detail') {
    return '/workspace/detail';
  }
  if (location === '/workspace/list') {
    return '/workspace/list';
  }
  if (location === '/workspace/overview') {
    return '/workspace/overview';
  }
  if (location === '/workspace/groups') {
    return '/workspace/groups';
  }
  if (location === '/workspace/members') {
    return '/workspace/members';
  }
  if (location.includes('/settings/general')) {
    return '/settings/general';
  }
  if (location.includes('/settings/account')) {
    return '/settings/account';
  }
  if (location.includes('/settings/bot')) {
    return '/settings/bot';
  }
  if (location.includes('/settings/messages')) {
    return '/settings/messages';
  }
  if (location.includes('/settings/ticket')) {
    return '/settings/ticket';
  }
  if (location.includes('/settings/meet')) {
    return '/settings/meet';
  }
  if (location.includes('/settings/app')) {
    return '/settings/app';
  }
  if (location.includes('/settings/workdays')) {
    return '/settings/workdays';
  }
};
