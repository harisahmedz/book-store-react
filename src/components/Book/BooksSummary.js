import classes from './Css/BookSummary.module.css';
import Button from '../UI/Button';

const BooksSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Enjoy Popular Books When You Subscribe</h2>
      <p>
      Get instant access to millions of eBooks, audiobooks, magazines, and more for only $8.99/month.
      
      </p>
      <Button>Subscribe Now</Button>
    </section>
  );
};

export default BooksSummary;