function monthToIndex(month) 
{
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  const index = months.indexOf(month.toLowerCase());
  return index + 1;
}