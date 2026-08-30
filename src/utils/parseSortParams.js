const parseSortBy = (sortBy) => {
  const keys = ['name', '_id', 'createdAt', 'updatedAt'];

  if (keys.includes(sortBy)) {
    return sortBy;
  }

  return 'name';
};

const parseSortOrder = (sortOrder) => {
  const isOrder = ['asc', 'desc'].includes(sortOrder);
  if (isOrder) return sortOrder;
  return 'asc';
};

export const parseSortParams = (query) => {
  const { sortBy, sortOrder } = query;

  const parsedSortBy = parseSortBy(sortBy);
  const parsedSortOrder = parseSortOrder(sortOrder);

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};