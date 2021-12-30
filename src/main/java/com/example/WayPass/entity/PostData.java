package com.example.WayPass.entity;

import java.util.Objects;

public class PostData {

    private String accountId;
    private String serviceName;
    private String accountName;
    private String hashedPassword;
    private String pin;

    public PostData(String accountId, String serviceName, String accountName, String hashedPassword, String pin) {
        this.accountId = accountId;
        this.serviceName = serviceName;
        this.accountName = accountName;
        this.hashedPassword = hashedPassword;
        this.pin = pin;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public String getHashedPassword() {
        return hashedPassword;
    }

    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }

    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }

    @Override
    public String toString() {
        return "PostData{" +
                "accountId='" + accountId + '\'' +
                ", serviceName='" + serviceName + '\'' +
                ", accountName='" + accountName + '\'' +
                ", hashedPassword='" + hashedPassword + '\'' +
                ", pin='" + pin + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PostData postData = (PostData) o;
        return Objects.equals(getAccountId(), postData.getAccountId()) && Objects.equals(getServiceName(), postData.getServiceName()) && Objects.equals(getAccountName(), postData.getAccountName()) && Objects.equals(getHashedPassword(), postData.getHashedPassword()) && Objects.equals(getPin(), postData.getPin());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getAccountId(), getServiceName(), getAccountName(), getHashedPassword(), getPin());
    }
}
