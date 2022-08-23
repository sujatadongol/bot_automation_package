import { PageSize } from '../../globalConstants';

export const PaginationDataHandling = (
  tickets,
  pageSize,
  currentPage,
  filteringTicket,
  fetchTicket,
  filterTicket,
  clearFilteredList,
  clearList,
) => {
  let from =
    tickets &&
    tickets[tickets.length - 1] &&
    tickets[tickets.length - 1].createdAt - 1;
  if (currentPage === Math.ceil(tickets && tickets.length / pageSize)) {
    if (filteringTicket === false) {
      fetchTicket(pageSize, from);
    } else {
      filterTicket(pageSize, from);
    }
  } else if (currentPage > Math.ceil(tickets && tickets.length / pageSize)) {
    if (filteringTicket === false) {
      clearList();
      fetchTicket(currentPage * pageSize, 0);
    } else {
      clearFilteredList();
      filterTicket(currentPage * pageSize, 0);
    }
  }
};

export const ScrollDetect = (
  loader,
  divId,
  list,
  count,
  fromTimestamp,
  fetchApi,
) => {
  const listDiv = document.getElementById(divId);
  let listDivScrollTop = listDiv && listDiv.scrollTop;
  let listDivScrollHeight = listDiv && listDiv.scrollHeight;
  let listDivClientHeight = listDiv && listDiv.clientHeight;
  if (
    Math.round(listDivScrollHeight - listDivScrollTop) === listDivClientHeight
  ) {
    if (!loader && list && list.length < count) {
      fetchApi(2, fromTimestamp - 1, true);
    }
  }
};

export const FetchApiOnScrollToBottom = (
  list,
  count,
  fromDateToPaginate,
  fetchApi,
  paginationLoader,
) => {
  console.log({ count }, { PageSize });
  if (parseInt(count) === 0 || parseInt(count) > parseInt(PageSize)) {
    if (!paginationLoader) {
      fetchApi(PageSize, fromDateToPaginate, true);
    }
  }
};

export const TablePaginationOnScrollingToBottom = () => {
  console.log('scrolling...............');
  let tableContent = document.querySelector('.ant-table-body');
  tableContent &&
    tableContent.addEventListener('scroll', event => {
      let listDivScrollTop = tableContent && tableContent.scrollTop;
      let listDivScrollHeight = tableContent && tableContent.scrollHeight;
      let listDivClientHeight = tableContent && tableContent.clientHeight;
      if (
        Math.round(listDivScrollHeight - listDivScrollTop) + 1 ===
          listDivClientHeight ||
        Math.round(listDivScrollHeight - listDivScrollTop) ===
          listDivClientHeight
      ) {
        return listDivScrollTop;
      }
    });
};

const formatApiUrl = (pageSize, from, query) => {
  let str = '';
  if (query && query !== '') {
    str =
      '?pageSize=' + pageSize + '&sort=DESC&from=' + from + '&query=' + query;
  } else {
    str = '?pageSize=' + pageSize + '&sort=DESC&from=' + from;
  }
  return str;
};
export const FormatApiUrl = formatApiUrl;
