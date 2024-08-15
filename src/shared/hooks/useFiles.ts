export const useFiles = (queryFunc: any, queryArg: any) => {
  const [getExcel] = queryFunc();

  const handleDownloadExcel = () => {
    getExcel(queryArg);
  };

  return { handleDownloadExcel };
};
