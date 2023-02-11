import PropTypes from 'prop-types'


import {
  StatContainer,
  StatTitle,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistic = ({ title, stats }) => {
  return (
    <StatContainer>
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}

        {/* <StatItem>
          <Label>.docx</Label>
          <Percentage>4%</Percentage>
        </StatItem>
        <StatItem>
          <Label>.mp3</Label>
          <Percentage>14%</Percentage>
        </StatItem>
        <StatItem>
          <Label>.pdf</Label>
          <Percentage>41%</Percentage>
        </StatItem>
        <StatItem>
          <Label>.mp4</Label>
          <Percentage>12%</Percentage>
        </StatItem> */}
      </StatList>
    </StatContainer>
  );
};
Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),),
}