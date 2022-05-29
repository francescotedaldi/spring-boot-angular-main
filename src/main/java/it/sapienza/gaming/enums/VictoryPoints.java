package it.sapienza.gaming.enums;

public enum VictoryPoints {

    ONE(1),
    THREE(3),
    FIVE(5);

    private final int points;

    VictoryPoints(int points) {
        this.points = points;
    }

    public int getPoints() {
        return points;
    }

}
