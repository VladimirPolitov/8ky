function pillars(num_pill, dist, width) {
    // your code here
    return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
}