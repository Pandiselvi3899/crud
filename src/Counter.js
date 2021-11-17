import { useState } from 'react';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter-likdis">
      <Button onClick={() => setLike(like + 1)}>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </Button>
      <Button onClick={() => setDislike(dislike + 1)}>
        <Badge badgeContent={dislike} color="secondary">
          👎
        </Badge>
      </Button>    </div>
  );
}