function csvtojson (csvdata, separator = ',') {
  const titles = csvdata.slice(0, csvdata.indexOf('\n')).split(separator);

  return csvdata
    .slice(csvdata.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(separator);
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      );
    });
};
// usgae
/*
csvtojson('col1,col2,col3,col4\na,b,c,d\ne,f,g,h');
// expected output
 [{'col1': 'a', 'col2': 'b', col3': 'c', 'col4': 'd'},{'col1': 'e', 'col2': 'f', col3': 'g', 'col4': 'h'}];
*/
