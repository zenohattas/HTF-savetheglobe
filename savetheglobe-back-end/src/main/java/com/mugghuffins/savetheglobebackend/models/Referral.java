package com.mugghuffins.savetheglobebackend.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Referral {
    @Id
    @GeneratedValue
    private String referralCode;
    @OneToMany
    private List<User> referredUsers;
    private int totalReferrals;

    public void setTotalReferrals(int totalReferrals) {
        this.totalReferrals = totalReferrals;
    }

    public String getReferralCode() {
        return referralCode;
    }

    public void setReferralCode(String referralCode) {
        this.referralCode = referralCode;
    }

    public List<User> getReferredUsers() {
        return referredUsers;
    }

    public void setReferredUsers(List<User> referredUsers) {
        this.referredUsers = referredUsers;
    }

    private int getTotalReferrals(){
        return  referredUsers.size();
    }
}
