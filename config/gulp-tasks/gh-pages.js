import ghPages from 'gh-pages';
import path from 'path';

export const deployGH = (cb) => {
  ghPages.publish(path.join(process.cwd(), './dist'), cb);
};
